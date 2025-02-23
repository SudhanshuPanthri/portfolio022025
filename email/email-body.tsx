
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


type EmailProps = {
    message: string,
    senderEmail: string
}

const EmailBody = ({ message, senderEmail }: EmailProps) => {
    return <Html>
        <Head />
        <Preview>New message from Portfolio</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">
                            You recieved this message from Portfolio
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>
                            {senderEmail}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}

export default EmailBody;