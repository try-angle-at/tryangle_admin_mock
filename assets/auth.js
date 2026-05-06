(function () {
  var USERS_KEY = 'tb_user';
  var SESSION_KEY = 'tryangle_auth_session';

  function now() {
    return Date.now();
  }

  function readJson(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function sanitizeUser(user) {
    return {
      id: user.id,
      email: user.email,
      name: user.name || '',
      nickname: user.nickname || '',
      phone: user.phone || '',
      role: user.role || 'CLIENT',
      state: typeof user.state === 'number' ? user.state : 1
    };
  }

  function ensureSeedUser() {
    var users = readJson(USERS_KEY, []);
    if (!Array.isArray(users) || users.length === 0) {
      var t = now();
      users = [{
        id: 1,
        email: 'admin@tryangle.com',
        password: 'admin1234',
        name: 'TryAngle 관리자',
        nickname: 'admin',
        phone: '010-0000-0000',
        emailConf: '1',
        desc: '기본 관리자 계정',
        fileId: '',
        role: 'ADMIN',
        extra: {},
        cDate: t,
        uDate: t,
        state: 1
      }];
      writeJson(USERS_KEY, users);
    }
    return users;
  }

  function getUsers() {
    var users = readJson(USERS_KEY, []);
    return Array.isArray(users) ? users : [];
  }

  function getActiveUsers() {
    return getUsers().filter(function (user) {
      return Number(user.state) === 1;
    });
  }

  function getSession() {
    return readJson(SESSION_KEY, null);
  }

  function setSession(user) {
    writeJson(SESSION_KEY, {
      user: sanitizeUser(user),
      loginAt: now()
    });
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function getNextUserId(users) {
    var maxId = users.reduce(function (max, user) {
      return Math.max(max, Number(user.id) || 0);
    }, 0);
    return maxId + 1;
  }

  function register(payload) {
    var users = getUsers();
    var email = String(payload.email || '').trim().toLowerCase();
    if (!email) {
      return { ok: false, message: '이메일을 입력해 주세요.' };
    }

    var exists = users.some(function (user) {
      return String(user.email || '').toLowerCase() === email;
    });
    if (exists) {
      return { ok: false, message: '이미 가입된 이메일입니다.' };
    }

    var t = now();
    var newUser = {
      id: getNextUserId(users),
      email: email,
      password: payload.password || '',
      name: payload.name || '',
      nickname: payload.nickname || '',
      phone: payload.phone || '',
      emailConf: payload.emailConf || '2',
      desc: payload.desc || '',
      fileId: payload.fileId || '',
      role: payload.role || 'CLIENT',
      extra: payload.extra || {},
      cDate: t,
      uDate: t,
      state: typeof payload.state === 'number' ? payload.state : 1
    };

    users.push(newUser);
    writeJson(USERS_KEY, users);
    return { ok: true, user: sanitizeUser(newUser) };
  }

  function login(email, password) {
    var normalizedEmail = String(email || '').trim().toLowerCase();
    var user = getActiveUsers().find(function (entry) {
      return String(entry.email || '').toLowerCase() === normalizedEmail
        && String(entry.password || '') === String(password || '');
    });

    if (!user) {
      return { ok: false, message: '이메일 또는 비밀번호가 올바르지 않거나 비활성 계정입니다.' };
    }

    setSession(user);
    return { ok: true, user: sanitizeUser(user) };
  }

  function requireAuth(redirectTo) {
    var session = getSession();
    if (!session || !session.user || Number(session.user.state) !== 1) {
      var next = encodeURIComponent(redirectTo || '/');
      window.location.replace('./login.html?next=' + next);
      return false;
    }
    return true;
  }

  ensureSeedUser();

  window.TryAngleAuth = {
    usersKey: USERS_KEY,
    sessionKey: SESSION_KEY,
    getUsers: getUsers,
    getActiveUsers: getActiveUsers,
    getSession: getSession,
    clearSession: clearSession,
    register: register,
    login: login,
    requireAuth: requireAuth
  };
})();
