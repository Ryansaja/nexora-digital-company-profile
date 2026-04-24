import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
		"./dictionaries/**/*.json",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1200px",
			},
		},
		extend: {
			colors: {
				background: "#FFFFFF",
				"background-dark": "#0A0A1A",
				"section-dark": "#0D1117",
				"section-dark-2": "#1A1F36",
				foreground: "#0A0A1A",
				"text-primary": "#0A0A1A",
				"text-secondary": "#6B7280",
				accent: {
					DEFAULT: "#635BFF",
					hover: "#4F46E5",
				},
				gradient: {
					aurora: "conic-gradient(from 120deg at 80% 0%, #635BFF 0deg, #60A5FA 90deg, #F472B6 180deg, #FDBA74 270deg, #635BFF 360deg)",
				},
				border: "#E5E7EB",
				"border-dark": "#2D3748",
				"stats-muted": "#9BA3AF",
			},
			fontFamily: {
				sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
				heading: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
			},
			fontWeight: {
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
			},
			letterSpacing: {
				tightest: "-0.05em",
				tighter: "-0.03em",
			},
			lineHeight: {
				heading: "1.1",
				body: "1.6",
			},
			borderRadius: {
				xl: "1.25rem",
				"2xl": "2rem",
				pill: "9999px",
			},
			boxShadow: {
				subtle: "0 2px 8px 0 rgba(10,10,26,0.04)",
				card: "0 8px 32px 0 rgba(99,91,255,0.08)",
				navbar: "0 2px 16px 0 rgba(10,10,26,0.06)",
				hero: "0 8px 48px 0 rgba(99,91,255,0.10)",
			},
			backgroundImage: {
				'aurora-mesh': 'radial-gradient(ellipse 80% 60% at 80% 0%, #635BFF 0%, #60A5FA 40%, #F472B6 70%, #FDBA74 100%)',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				counter: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				gradientShift: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				float: {
					'0%,100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' },
				},
			},
			animation: {
				fadeInUp: 'fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both',
				counter: 'counter 1.2s ease-out',
				gradientShift: 'gradientShift 10s ease-in-out infinite',
				marquee: 'marquee 28s linear infinite',
				float: 'float 8s ease-in-out infinite',
			},
			screens: {
				xs: "480px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			spacing: {
				section: "120px",
				sectionMd: "80px",
				sectionSm: "48px",
			},
		},
	},
	plugins: [animate],
};

export default config;
