import { useEffect, useState } from "react";
import { Button, Card, Input } from "../../components";
import { Stack } from "@mui/material";
import "./Login.css";
import { login } from "../../redux/features";
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: "",
  password: "",
};
function Login() {
  const authStore = useAppSelector((state) => state.auth);
  const [user, saveUser] = useState<User>(initialState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.isSuccess) {
      toast.success('Welcome back Admin');
      navigate('/dashboard');
    } else if (authStore.isError) {
      toast.error('There was a problem logging in');
    }
  }, [authStore]);

  const handleChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user));
  }
  return (
    <Card>
      <Stack
        spacing={5}
        className="content"
        direction="column"
        useFlexGap
        width="auto"
        justifyContent="space-between"
      >
        <h1 className="title">Hello again! welcome back</h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="user"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={handleChange}
          />
          <Input
            name="password "
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={handleChange}
          />
          <Button type="submit">Sign In</Button>
        </form>     
      </Stack>
    </Card>
  );
}

export default Login;
