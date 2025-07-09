// addAdminUser.js
require('dotenv').config({ path: '.env.local' }); // .env.local se variables load karain
const mongoose = require('mongoose');
const User = require('./src/models/User').default; // .default kyunke TypeScript export default karta hai

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const addAdmin = async () => {
  await connectDB();
  const adminEmail = 'admin@example.com'; // Aapki pasand ka admin email
  const adminPassword = 'adminpassword'; // Aapki pasand ka password (REAL: HASH THIS!)

  try {
    let admin = await User.findOne({ email: adminEmail });

    if (admin) {
      console.log('Admin user already exists:', admin.email);
    } else {
      admin = new User({
        email: adminEmail,
        password: adminPassword, // REAL: Use bcrypt.hashSync(adminPassword, 10)
        name: 'Admin User',
        role: 'admin',
      });
      await admin.save();
      console.log('Admin user added:', admin.email);
    }
  } catch (error) {
    console.error('Error adding admin user:', error);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed.');
  }
};

addAdmin();