declare global {
    namespace NodeJS {
        interface ProcessEnv {
            KEY: string
            SUPABASE_URL: string
            ANON: string
            NODE_ENV: 'development' | 'production'
        }
    }
}

export {}
