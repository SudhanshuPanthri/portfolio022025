"use server"

import React from "react";
import { Resend } from "resend";
import EmailBody from "@/email/email-body";

const resend = new Resend(process.env.RESEND_API_KEY)

const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
}

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid Message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "PORTFOLIO RESPONSE : <onboarding@resend.dev>",
            to: "panthrisudhanshu666@gmail.com",
            subject: "Message from portfolio",
            replyTo: senderEmail as string,
            react: React.createElement(EmailBody, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        })
    }
    catch (error: unknown) {

        if (error instanceof Error) {
            return {
                error: error.message
            }
        }
        else if (error && typeof error === "object" && "message" in error) {
            return {
                error: String(error.message)
            }
        }
        else if (typeof error === "string") {
            return {
                error: error
            }
        }
        else {
            return {
                error: "Something went wrong"
            }
        }
    }
    return {
        data
    }
}