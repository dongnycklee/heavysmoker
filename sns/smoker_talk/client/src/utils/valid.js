const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "이름을 입력해주세요."
    }else if(fullname.length > 25){
        err.fullname = "25글자 이내로 작성해주세요."
    }

    if(!username) {
        err.username = "닉네임을 입력해주세요"
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "25글자 이내로 작성해주세요."
    }

    if(!email) {
        err.email = "이메일을 입력해주세요."
    }else if(!validateEmail(email)){
        err.email = "이메일 양식에 맞지 않습니다."
    }

    if(!password) {
        err.password = "비밀번호를 입력해 주세요."
    }else if(password.length < 6){
        err.password = "최소6글자 이상이여야 합니다."
    }

    if(password !== cf_password) {
        err.cf_password = "비밀번호가 일치하지 않습니다."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid