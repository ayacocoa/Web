UPDATEUSER = "UPDATEUSER"; // 更新当前账户

export default {
  // 更新当前用户
  [UPDATEUSER](state, opt) {
    console.log(opt);
    state.userInfo.id = opt.id;
    state.userInfo.name = opt.name;
    state.userInfo.AccountData = opt.AccountData;
    state.userInfo.password = opt.password;
    state.userInfo.MobilePhone = opt.MobilePhone;
    state.userInfo.CustomerType = opt.CustomerType;
    state.userInfo.Gender = opt.Gender;
  },
};
