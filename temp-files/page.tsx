import Link from 'next/link';
import Image from 'next/image';
import { Globe, Linkedin, Instagram, Mail } from 'lucide-react';
import './links.css';

export default function LinksPage() {
    const links = [
        {
            name: 'Website',
            url: 'https://sotercare.com',
            icon: <Globe size={20} />,
            label: 'sotercare.com'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/sotercare/',
            icon: <Linkedin size={20} />,
            label: 'Connect on LinkedIn'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/sotercare_',
            icon: <Instagram size={20} />,
            label: 'Follow on Instagram'
        },
        {
            name: 'Email',
            url: 'mailto:support@sotercare.com',
            icon: <Mail size={20} />,
            label: 'support@sotercare.com'
        }
    ];

    return (
        <main className="links-page">
            <div className="links-container">

                {/* Header Section */}
                <div className="header-section">
                    <div className="logo-wrapper">
                        <Image
                            src="/assets/SoterCare-Primary-logo-brandblue.png"
                            alt="SoterCare"
                            fill
                            className="logo"
                            priority
                        />
                    </div>
                    <p className="tagline">
                        wellness simplified
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mission-section">
                    <h1>
                        "Care without the weight,<br />
                        <span className="highlight">Love without the Worry."</span>
                    </h1>
                </div>

                {/* Links Section */}
                <div className="links-list">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target={link.name === 'Email' ? undefined : '_blank'}
                            rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                            className="link-card"
                        >
                            <div className="icon-wrapper">
                                {link.icon}
                            </div>
                            <div className="text-wrapper">
                                <span className="link-name">{link.name}</span>
                                <span className="link-label">{link.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="footer-note">
                    © {new Date().getFullYear()} SoterCare. All rights reserved.
                </div>
            </div>
        </main>
    );
}
