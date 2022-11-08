import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Walter',
      lastname: 'Yasunaka',
      email: 'yasunakatoshio@gmail.com',
      age: 25,
      weight: 72,
      height: 1.74,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
