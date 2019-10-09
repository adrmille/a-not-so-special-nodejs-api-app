const Role = {values: ['admin', 'user']};

Role.isRole = (value) => {
  return Role.values.find(v => v === value) !== undefined
};

module.exports = Role;