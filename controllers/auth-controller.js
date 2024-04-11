// -- Following function are the controllers that are responsible for the functionallity part of the route  -- //

async function Home(req, res) {
  try {
    res.send("<h1>Home Landing Page adding</h1>");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
async function Register(req, res) {
  try {
    console.log(req.body);
    res.send("<h1>User Registration Page</h1>");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default { Home, Register };
