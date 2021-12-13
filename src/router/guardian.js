import store from '@/store/index.js'

/**
 * Permissions RULES
 * - [1] path.meta = * is public [ALLOWED]
 * - [2] user not logged in [NOT ALLOWED]
 * - [3] path.meta is present inside the loggedUser.scope
 * @param {*} meta
 */
function allowed(meta) {
  // [1]
  if (meta.permission == '*') {
    return true
  }

  // [2]
  const loggedUser = store.getters['auth/getLoggedUser']
  if (!loggedUser || !loggedUser.auth) {
    return false
  }

  // [3]
  const userPermissions = loggedUser.auth.scope.filter(
    (perm) => perm == meta.permission
  )
  return userPermissions.length >= 1
}

function proceed(to, next) {
  const pagePermission = to.meta

  if (!allowed(pagePermission)) {
    next({ name: 'login' })
  }
  next()
}

export default function (to, from, next) {
  const loggedUser = store.getters['auth/getLoggedUser']
  if (!loggedUser || !loggedUser.auth) {
    store.dispatch('auth/loadLoggedUser').then(() => {
      proceed(to, next)
      return
    })
  }
  proceed(to, next)
}
