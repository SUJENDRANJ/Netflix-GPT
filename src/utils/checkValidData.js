export const CheckValidData = (email, password) => {
  const isEmailVaid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailVaid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
