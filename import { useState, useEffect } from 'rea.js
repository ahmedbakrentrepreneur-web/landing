import { useState, useEffect } from 'react';

export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const trackCTA = (location: string) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'cta_click', { location });
        }
        window.open('https://t.me/tradincap', '_blank');
    };

    const stats = [
        { value: '98.7%', label: 'Signal Accuracy' },
        { value: '24/7', label: 'Market Coverage' },
        { value: '15K+', label: 'Active Members' },
        { value: '$2.4M', label: 'Member Profits' },
    ];

    const testimonials = [
        {
            name: 'Ahmed Hassan',
            role: 'Professional Trader',
            image: '👤',
            text: 'The most accurate signals I\'ve ever used. Tradincap transformed my trading strategy completely.',
            rating: 5,
        },
        {
            name: 'Sarah Mitchell',
            role: 'Crypto Investor',
            image: '👤',
            text: 'Instant notifications and crystal-clear analysis. Worth every penny of the subscription.',
            rating: 5,
        },
        {
            name: 'Mohammed Ali',
            role: 'Day Trader',
            image: '👤',
            text: 'Outstanding support team and incredibly reliable signals. My portfolio grew 340% this year.',
            rating: 5,
        },
    ];

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Real-Time Signals',
            description: 'Lightning-fast trading signals delivered instantly to your Telegram',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Deep Market Analysis',
            description: 'AI-powered analytics with comprehensive technical and fundamental insights',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'Expert Support',
            description: 'Dedicated support team available 24/7 to guide your trading journey',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Risk Management',
            description: 'Advanced risk-reward ratios and stop-loss strategies for every signal',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-red-900/20">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-600 blur-xl opacity-50"></div>
                                <svg className="w-10 h-10 text-red-600 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-red-600 bg-clip-text text-transparent">
                                    Tradincap
                                </h1>
                                <p className="text-xs text-gray-500">Premium Trading Signals</p>
                            </div>
                        </div>
                        <button
                            onClick={() => trackCTA('navbar')}
                            className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="font-semibold">Join Now</span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className={`relative z-10 container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                            <span className="text-sm text-red-300">Trusted by 15,000+ Professional Traders</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                                Master The
                            </span>
                            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-600 bg-clip-text text-transparent mt-2">
                                Art of Trading
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Elite trading signals powered by AI and expert analysis. Join the wolf pack and start making intelligent trading decisions today.
                        </p>

                        {/* Hero Image */}
                        <div className="relative max-w-4xl mx-auto my-12">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-3xl opacity-20"></div>
                            <div className="relative rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl">
                                <img
                                    src="/wolf-hero.png"
                                    alt="Tradincap - Premium Trading Platform"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <blockquote className="text-2xl md:text-3xl font-bold text-white italic">
                                        "Success is not by chance—it's a decision made every single day."
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => trackCTA('hero_primary')}
                                className="group relative px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span className="text-lg font-bold">Start Trading Smarter</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                            <div className="text-center sm:text-left">
                                <p className="text-sm text-gray-400">Premium Annual Access</p>
                                <p className="text-2xl font-bold text-white">$100<span className="text-sm text-gray-400">/year</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent"></div>
                <div className="container mx-auto px-6 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group cursor-pointer">
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:blur-2xl transition-all"></div>
                                    <h3 className="relative text-4xl md:text-5xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </h3>
                                </div>
                                <p className="mt-2 text-gray-400 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Why Choose
                            </span>
                            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Tradincap</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Advanced trading intelligence designed for serious traders who demand precision and results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-gradient-to-b from-zinc-900/50 to-zinc-900/30 border border-red-900/20 rounded-2xl hover:border-red-600/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 text-red-600 rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Trusted by
                            </span>
                            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Professionals</span>
                        </h2>
                        <p className="text-xl text-gray-400">Real results from real traders</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ${index === activeTestimonial ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                                        }`}
                                >
                                    <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-red-900/30 rounded-3xl p-12 backdrop-blur-xl">
                                        <div className="flex items-center gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-2xl text-gray-100 leading-relaxed mb-8 italic">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                                                {testimonial.image}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                                                <p className="text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === activeTestimonial ? 'bg-red-600 w-8' : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-red-600/20 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Ready to Transform
                            </span>
                            <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                Your Trading Game?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Join thousands of successful traders who trust Tradincap for daily market insights and profitable signals
                        </p>
                        <button
                            onClick={() => trackCTA('cta_section')}
                            className="group relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-600/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex items-center gap-3">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="text-xl font-bold">Join Tradincap on Telegram</span>
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-red-900/20 py-16 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-red-600 blur-lg opacity-50"></div>
                                    <svg className="w-10 h-10 text-red-600 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Tradincap</h3>
                                    <p className="text-xs text-gray-500">Elite Trading Signals</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Empowering traders worldwide with AI-driven market intelligence and expert analysis.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold mb-4">Platform</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-red-600 transition-colors">Trading Signals</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Market Analysis</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Educational Resources</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Community Forum</a></li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="font-bold mb-4">Connect With Us</h4>
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={() => trackCTA('footer_telegram')}
                                    className="group p-3 bg-zinc-900 border border-red-900/20 rounded-lg hover:border-red-600/50 hover:bg-red-600/10 transition-all"
                                >
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => window.open('https://instagram.com/tradincap', '_blank')}
                                    className="group p-3 bg-zinc-900 border border-red-900/20 rounded-lg hover:border-red-600/50 hover:bg-red-600/10 transition-all"
                                >
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth={2} />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-400">
                                Join our community of 15,000+ traders
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-red-900/20 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <p>Risk Disclaimer: Trading involves risk. Signals are for informational purposes only.</p>
                            </div>
                            <p>© {new Date().getFullYear()} Tradincap. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
