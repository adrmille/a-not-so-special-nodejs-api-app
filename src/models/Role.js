const Role = {
  ADMIN: 'admin',
  USER: 'user'
};

Role.values = [Role.ADMIN, Role.USER];

Role.isRole = (value) => {
  return Role.values.find(v => v === value) !== undefined
};

module.exports = Role;