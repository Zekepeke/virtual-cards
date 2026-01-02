import React, { useState } from 'react';
import { RomanticButton } from './romantic-button';
import { RomanticCard } from './romantic-card';
import { RomanticInput } from './romantic-input';
import { OpenCardAnimation } from './open-card-animation';
import { 
  FloatingHearts, 
  SparkleDecoration, 
  EnvelopeIcon, 
  HeartDivider,
  GoldAccent 
} from './micro-illustrations';
import { 
  Heart, 
  Gift, 
  Calendar, 
  Image, 
  Lock, 
  Clock,
  Video,
  Send,
  Check,
  Star,
  Play,
  ArrowRight,
  Mail,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export function LandingPage() {
  const [email, setEmail] = useState('');

  const templates = [
    { 
      id: 1, 
      title: 'Anniversary', 
      color: 'from-[var(--rose)] to-[var(--rose-deep)]',
      icon: Heart,
      description: 'Celebrate your love'
    },
    { 
      id: 2, 
      title: 'Good Morning', 
      color: 'from-[#FFB347] to-[#FFCC70]',
      icon: Sparkles,
      description: 'Start their day with love'
    },
    { 
      id: 3, 
      title: 'Miss You', 
      color: 'from-[#9D7CE8] to-[#B89FF5]',
      icon: Mail,
      description: 'Bridge the distance'
    },
    { 
      id: 4, 
      title: 'Birthday', 
      color: 'from-[var(--gold)] to-[var(--gold-light)]',
      icon: Gift,
      description: 'Make it special'
    },
    { 
      id: 5, 
      title: 'Holiday', 
      color: 'from-[#4ECDC4] to-[#6FE7DE]',
      icon: Star,
      description: 'Seasonal celebrations'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Scheduled Delivery',
      description: 'Send your card at the perfect moment, even if you\'re asleep'
    },
    {
      icon: Image,
      title: 'Photo & Video',
      description: 'Add personal photos and video messages to your card'
    },
    {
      icon: Lock,
      title: 'Private Link',
      description: 'Your card is for their eyes only with a unique secure link'
    },
    {
      icon: Gift,
      title: 'Optional Gift',
      description: 'Include a digital gift card to make it extra special'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & James',
      location: 'NYC ↔ London',
      quote: 'LuvNote makes the 3,000 miles feel like nothing. Opening a card from James is the highlight of my day.',
      image: null
    },
    {
      name: 'Emma & Lucas',
      location: 'Tokyo ↔ Paris',
      quote: 'We send each other good morning cards every day. It\'s our little ritual that keeps us connected.',
      image: null
    },
    {
      name: 'Maya & Alex',
      location: 'Sydney ↔ Toronto',
      quote: 'The animation when opening a card feels so real. It\'s like receiving a physical gift in the mail.',
      image: null
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Card',
      description: 'Pick from beautiful templates designed for every occasion and feeling',
      icon: Heart
    },
    {
      number: '02',
      title: 'Personalize It',
      description: 'Write your message, add photos or videos, and choose when to send',
      icon: Sparkles
    },
    {
      number: '03',
      title: 'Send & Delight',
      description: 'They\'ll receive a private link with an enchanting card-opening animation',
      icon: Send
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingHearts />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="text-[var(--rose)]" fill="var(--rose)" size={24} />
              <span className="text-[var(--charcoal)]">LuvNote</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-[var(--charcoal-lighter)] hover:text-[var(--rose)] transition-colors">
                How it Works
              </a>
              <a href="#templates" className="text-[var(--charcoal-lighter)] hover:text-[var(--rose)] transition-colors">
                Templates
              </a>
              <a href="#pricing" className="text-[var(--charcoal-lighter)] hover:text-[var(--rose)] transition-colors">
                Pricing
              </a>
            </div>
            <RomanticButton variant="ghost" className="hidden md:block px-6 py-2">
              Sign In
            </RomanticButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[var(--blush-pink-light)] px-4 py-2 rounded-[var(--radius-full)] mb-6">
                <Sparkles size={16} className="text-[var(--rose)]" />
                <span className="text-[var(--rose-dark)]">For Long-Distance Love</span>
              </div>
              
              <h1 className="text-[var(--charcoal)] mb-6 leading-tight">
                Send love that feels like opening a real card
              </h1>
              
              <p className="text-[var(--charcoal-light)] mb-8 max-w-lg mx-auto md:mx-0">
                Bridge the distance with beautiful digital cards that capture the magic of receiving 
                something special in the mail. Perfect for couples separated by miles, not hearts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <RomanticButton variant="primary" className="group">
                  Create a Love Card
                  <Heart size={18} className="ml-2 group-hover:scale-110 transition-transform" />
                </RomanticButton>
                <RomanticButton variant="ghost" className="group">
                  <Play size={18} className="mr-2" />
                  See How It Works
                </RomanticButton>
              </div>

              <div className="flex items-center gap-6 justify-center md:justify-start text-[var(--charcoal-lighter)]">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-[var(--rose)]" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-[var(--rose)]" />
                  <span>No credit card</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Card Animation Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-[var(--rose)]/10 to-[var(--gold)]/10 rounded-[var(--radius-xl)] blur-3xl" />
              <div className="relative bg-white/50 backdrop-blur-sm rounded-[var(--radius-xl)] p-8 border border-[var(--border)]">
                <OpenCardAnimation />
              </div>
              <SparkleDecoration className="absolute -top-4 -right-4" />
              <SparkleDecoration className="absolute -bottom-4 -left-4" />
            </motion.div>
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* How It Works Section */}
      <section id="how" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-[var(--charcoal)]">How It Works</h2>
              <SparkleDecoration className="opacity-60" />
            </div>
            <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
              Creating and sending a love card is beautifully simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <RomanticCard className="relative h-full">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center shadow-[var(--shadow-pink)]">
                    <span className="text-white">{step.number}</span>
                  </div>
                  
                  <div className="pt-8">
                    <step.icon className="text-[var(--rose)] mb-4" size={32} />
                    <h3 className="text-[var(--charcoal)] mb-3">{step.title}</h3>
                    <p className="text-[var(--charcoal-lighter)]">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ArrowRight className="text-[var(--rose)]" size={24} />
                    </div>
                  )}
                </RomanticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Templates Section */}
      <section id="templates" className="py-20 md:py-32 bg-gradient-to-br from-[var(--blush-pink-light)] to-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-[var(--charcoal)]">Cards for Every Moment</h2>
              <Heart size={24} className="text-[var(--rose)]" fill="var(--rose)" />
            </div>
            <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
              Beautiful templates designed for all the occasions that matter
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="cursor-pointer"
              >
                <div className={`
                  aspect-[3/4] rounded-[var(--radius-xl)] 
                  bg-gradient-to-br ${template.color}
                  shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
                  transition-all duration-300
                  flex flex-col items-center justify-center
                  p-6 text-white
                `}>
                  <template.icon size={40} className="mb-3" />
                  <h4 className="text-white mb-2">{template.title}</h4>
                  <p className="text-white/80 text-center hidden md:block">
                    {template.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--charcoal-lighter)] mb-6">
              Plus many more templates to explore
            </p>
            <RomanticButton variant="secondary">
              Browse All Templates
            </RomanticButton>
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-[var(--charcoal)]">Everything You Need</h2>
              <SparkleDecoration className="opacity-60" />
            </div>
            <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
              Thoughtful features to make your love cards extra special
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <RomanticCard hover className="h-full">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center shadow-[var(--shadow-pink)]">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[var(--charcoal)] mb-2">{feature.title}</h4>
                      <p className="text-[var(--charcoal-lighter)]">{feature.description}</p>
                    </div>
                  </div>
                </RomanticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--cream)] to-[var(--blush-pink-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-[var(--charcoal)]">Loved by Couples Worldwide</h2>
              <GoldAccent />
            </div>
            <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
              Real stories from long-distance couples staying connected
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <RomanticCard className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[var(--gold)]" fill="var(--gold)" />
                    ))}
                  </div>
                  
                  <p className="text-[var(--charcoal)] mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center text-white">
                      {testimonial.name.split('&')[0].trim()[0]}
                      {testimonial.name.split('&')[1]?.trim()[0]}
                    </div>
                    <div>
                      <p className="text-[var(--charcoal)]">{testimonial.name}</p>
                      <p className="text-[var(--charcoal-lighter)]">{testimonial.location}</p>
                    </div>
                  </div>
                </RomanticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Pricing Teaser Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-[var(--charcoal)]">Simple, Honest Pricing</h2>
              <SparkleDecoration className="opacity-60" />
            </div>
            <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
              Start free, upgrade when you're ready for more
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <RomanticCard className="relative">
              <div className="mb-6">
                <h3 className="text-[var(--charcoal)] mb-2">Free</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[var(--charcoal)]">$0</span>
                  <span className="text-[var(--charcoal-lighter)]">forever</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '5 cards per month',
                  'Basic templates',
                  'Text messages',
                  'Scheduled delivery',
                  'Private links'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--rose)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--charcoal-lighter)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <RomanticButton variant="ghost" className="w-full">
                Get Started Free
              </RomanticButton>
            </RomanticCard>

            {/* Premium Plan */}
            <RomanticCard className="relative border-2 border-[var(--rose)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--rose)] to-[var(--rose-deep)] px-4 py-1 rounded-[var(--radius-full)] shadow-[var(--shadow-pink)]">
                <span className="text-white">Most Popular</span>
              </div>

              <div className="mb-6 pt-4">
                <h3 className="text-[var(--charcoal)] mb-2">Premium</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[var(--charcoal)]">$9.99</span>
                  <span className="text-[var(--charcoal-lighter)]">per month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited cards',
                  'All premium templates',
                  'Photo & video messages',
                  'Custom designs',
                  'Gift card integration',
                  'Priority support'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--rose)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--charcoal-lighter)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <RomanticButton variant="primary" className="w-full">
                Start Premium Trial
              </RomanticButton>
            </RomanticCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Heart size={40} fill="white" className="text-white" />
          </div>
          <div className="absolute top-20 right-20">
            <Sparkles size={32} className="text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <Mail size={36} className="text-white" />
          </div>
          <div className="absolute bottom-10 right-1/3">
            <Heart size={28} fill="white" className="text-white" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">
              Ready to Send Your First Love Card?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of couples using LuvNote to stay connected across any distance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <RomanticInput 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-xs bg-white"
              />
              <RomanticButton variant="secondary" className="whitespace-nowrap">
                Create Free Account
              </RomanticButton>
            </div>

            <p className="text-white/70">
              No credit card required • Free forever plan available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--charcoal)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="text-[var(--rose)]" fill="var(--rose)" size={20} />
              <span className="text-white">LuvNote</span>
            </div>
            
            <p className="text-white/50 text-center">
              © 2026 LuvNote. Made with love for long-distance couples.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
