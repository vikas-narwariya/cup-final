import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import AdminModal from "../models/admin.js";

const secret = 'test';

export const asignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldAdmin = await AdminModal.findOne({ email });

    if (!oldAdmin) return res.status(404).json({ message: "Admin doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldAdmin.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldAdmin.email, id: oldAdmin._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldAdmin, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const getAdmin = async (req, res) => {
  const { page } = req.query;
  
  try {
      const LIMIT = 8;
      const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
  
      const total = await AdminModal.countDocuments({});
      const admin = await AdminModal.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

      res.json({ data: admin, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
  } catch (error) {    
      res.status(404).json({ message: error.message });
  }
}

export const asignup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldAdmin = await AdminModal.findOne({ email });

    if (oldAdmin) return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await AdminModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }

  

};
