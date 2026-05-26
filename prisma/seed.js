const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

// Initialize the Prisma 7 driver adapter directly with the URL
const adapter = new PrismaBetterSqlite3({
    url: 'file:./dev.db'

});

// Pass the adapter to PrismaClient
const prisma = new PrismaClient({ adapter });


async function main() {
    // Clear out any existing records so we can run this script multiple times safely
    await prisma.invoice.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.revenue.deleteMany();

    console.log('Clearing database...');

    // Seed Customers
    const customer1 = await prisma.customer.create({
        data: { name: 'Jane Cooper', email: 'jane.cooper@example.com', role: 'Admin', status: 'Active' },
    });
    const customer2 = await prisma.customer.create({
        data: { name: 'Cody Fisher', email: 'cody.fisher@example.com', role: 'Owner', status: 'Inactive' },
    });
    const customer3 = await prisma.customer.create({
        data: { name: 'Esther Howard', email: 'esther.howard@example.com', role: 'Member', status: 'Active' },
    });
    const customer4 = await prisma.customer.create({
        data: { name: 'Albert Flores', email: 'albert.flores@example.com', role: 'Member', status: 'Active' },
    });

    // Seed Invoices
    await prisma.invoice.createMany({
        data: [
            { customerId: customer1.id, amount: 99.99, status: 'Paid' },
            { customerId: customer1.id, amount: 150.00, status: 'Pending' },
            { customerId: customer2.id, amount: 450.00, status: 'Paid' },
            { customerId: customer3.id, amount: 1200.00, status: 'Paid' },
            { customerId: customer4.id, amount: 75.50, status: 'Pending' },
        ],
    });

    // Seed Revenue
    await prisma.revenue.createMany({
        data: [
            { month: 'Jan', amount: 2000 },
            { month: 'Feb', amount: 1800 },
            { month: 'Mar', amount: 2200 },
            { month: 'Apr', amount: 2500 },
            { month: 'May', amount: 2300 },
            { month: 'Jun', amount: 3200 },
            { month: 'Jul', amount: 3500 },
            { month: 'Aug', amount: 3700 },
            { month: 'Sep', amount: 3000 },
            { month: 'Oct', amount: 3900 },
            { month: 'Nov', amount: 4100 },
            { month: 'Dec', amount: 4800 },
        ],
    });

    console.log('Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
