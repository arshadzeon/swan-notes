module.exports = {
  // ... other config
  theme: {
    extend: {
      // ... other extensions
      animation: {
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'cursor-move': 'cursor-move 4s ease-in-out infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'cursor-move': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-30px, -20px)' },
          '40%': { transform: 'translate(40px, 10px)' },
          '60%': { transform: 'translate(-20px, 20px)' },
          '80%': { transform: 'translate(30px, -15px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  // ... other config
} 