const { User } = require('../models');

module.exports = {
  getRegistrantCount: () => {
    return User.find({ is_camper: true, is_completed_registration: true })
      .then(user => user.length)
  },
  getRegistrantReport: () => {
    const programmerCompleted = User.find({ role: 'programmer', is_completed_registration: true });
    const designerCompleted = User.find({ role: 'designer', is_completed_registration: true });
    const marketingCompleted = User.find({ role: 'marketing', is_completed_registration: true });
    const contentCompleted = User.find({ role: 'content', is_completed_registration: true });
    const notCompleted = User.find({ is_camper: true, is_completed_registration: false });
    return Promise.all([programmerCompleted, designerCompleted, marketingCompleted, contentCompleted, notCompleted])
      .then(([programmer, designer, marketing, content, notCompleted]) => ({
        programmer: programmer.length,
        designer: designer.length,
        marketing: marketing.length,
        content: content.length,
        notCompleted: notCompleted.length
      }));
  },
  getRegistrantCountByRole: (role) => {
    console.log(role);
    return User.find({ role, is_camper: true })
      .then(user => user.length)
  }
}