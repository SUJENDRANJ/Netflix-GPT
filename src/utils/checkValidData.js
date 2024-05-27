export const CheckValidData = (email, password,userName ) => {
  const isEmailVaid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
    
  
  const isNameValid = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(userName);
    

  if (!isNameValid) return "Username is not Valid";
  if (!isEmailVaid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
