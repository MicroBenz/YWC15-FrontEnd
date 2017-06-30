const { User } = require('../models');

module.exports = {
  getRegistrantCount: () => {
    return User.find({ is_camper: true, is_completed_registration: true })
      .then(user => user.length)
  },
  getRegistrantCountByRole: (role) => {
    console.log(role);
    return User.find({ role, is_camper: true })
      .then(user => user.length)
  }
}