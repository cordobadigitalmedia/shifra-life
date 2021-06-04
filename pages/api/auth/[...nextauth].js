import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],

    // A database is optional, but required to persist accounts in a database
    database: {
        type: "mongodb",
        url: process.env.DATABASE_URL,
        w: "majority",
        retryWrites: true,
        useNewUrlParser: true,
        //useUnifiedTopology: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useFindAndModify: false,
        useCreateIndex: true,        
    },
})

