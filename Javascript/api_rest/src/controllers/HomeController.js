import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      firstname: 'Walter',
      lastname: 'Yasunaka',
      email: 'toshioyasunaka@hotmail.com',
      age: 25,
      height: 1.74,
      weight: 69,
    });

    res.json(newStudent);
  }
}

export default new HomeController();
