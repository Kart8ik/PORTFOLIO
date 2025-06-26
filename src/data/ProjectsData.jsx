import calpal from '@/assets/project-images/calpal.png'
import p2pechovoid from '@/assets/project-images/p2pechovoid.png'
import loopy from '@/assets/project-images/loopy.png'

export const projects = [
    {
        name: 'CalPal',
        description: 'Collaborative Task Management App',
        duration: 'Feb 2025 - Mar 2025',
        stack: ['react','express', 'nodejs', 'mongodb','tailwind','shadcn'],
        github: 'https://github.com/Kart8ik/CALPAL_2.0',
        link: 'https://calpal-app.vercel.app/',
        explanation:'A Website that helps you organize your tasks every day with a built-in calendar and also create groups to schedule and plan with multiple people, see when your group members are free to plan effectively, all while keeping things needed private.',
        image: calpal
    },
    {
        name: 'P2P-Echovoid',
        description: 'Peer to Peer LAN Chat Application',
        duration: 'Apr 2025 - Apr 2025',
        stack: ['electron', 'javascript', 'nodejs'],
        github: 'https://github.com/Kart8ik/P2P_CHAT_APP',
        // link: ,
        explanation:'A lightweight, peer-to-peer chat app built with Electron and custom networking libraries. No servers, no middlemen — just pure local network wizardry. Connect, broadcast, and chat with other agents on the same network.',
        image: p2pechovoid
    },
    {
        name: 'Loopy',
        description: 'Create your own Background Music',
        duration: 'Jun 2025 - Ongoing',
        stack: ['python', 'fastapi', 'react', 'tailwind','shadcn'],
        github: 'https://github.com/Kart8ik/LOOPY--audio-stem-transformer',
        // link: ,
        explanation:'Tired of listening to generic background music when you are working? Wish you could listen to songs you like without vocals distracting you? Loopy-tune allows you to upload songs, removes vocals and then allows you to loop the background music to your liking',
        image: loopy
    }
]
