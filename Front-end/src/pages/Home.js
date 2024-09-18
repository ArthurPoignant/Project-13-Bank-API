import './Home.css';
import Hero from '../component/Hero';
import Feature from '../component/Feature';
import chat from '../img/icon-chat.png'
import money from '../img/icon-money.png'
import security from '../img/icon-security.png'
/* import { loginApi, fetchUser, updateUser } from '../api/api'; */

export default function Home() {

    return (
        <>
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature picture={chat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes." />
                    <Feature picture={money} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
                    <Feature picture={security} title="Security you can trust" text="We use top of the line encryption to make sure your data and money
                            is always safe." />
                </section>
            </main>
        </>
    )
}