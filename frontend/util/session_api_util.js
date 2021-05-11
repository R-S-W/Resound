

export const signup = (user)=>{
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user},
    // beforeSend:xhr=>{xhr.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content') ) }
  })
}

// export const delete_account = ()=>{    // #-#
//   return $.ajax({
//     method: "DELETE",
//     url:"api/users/${}`
//   })
// }

export const login = (user)=>{
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: {user}
  })
}

export const logout = ()=>{
  return $.ajax({
    method: "DELETE",
    url: 'api/session',
  })
}
