import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@sneakyheads.com",
    password: bcrypt.hashSync("Admin123", 10),
    isAdmin: true,
  },
  {
    name: "Test User1",
    email: "test1@sneakyheads.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Test User2",
    email: "test2@sneakyheads.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
