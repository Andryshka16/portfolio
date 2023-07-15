interface Skill {
    skill: string
    level: 1 | 2 | 3
}

const frontend: Skill[] = [
    { skill: 'HTML', level: 3 },
    { skill: 'CSS', level: 2 },
    { skill: 'TypeScript', level: 3 },
    { skill: 'Tailwind', level: 2 },
    { skill: 'React', level: 3 },
    { skill: 'Redux Toolkit', level: 3 }
]
const backend: Skill[] = [
    { skill: 'Node Js', level: 2 },
    { skill: 'MongoDB', level: 3 },
    { skill: 'Socket Io', level: 3 },
    { skill: 'JWT', level: 2 },
    { skill: 'Express Js', level: 2 },
    { skill: 'SQL', level: 1 }
]

export { frontend, backend }
