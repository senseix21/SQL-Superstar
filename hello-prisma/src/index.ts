import { PrismaClient } from 'prisma/prisma-client';
import app from './app';


const prisma = new PrismaClient();
const port = process.env.PORT || 5050;

async function main() {
    app.listen(port, () => {
        console.log('listening on port ' + port);
    })
}
main();