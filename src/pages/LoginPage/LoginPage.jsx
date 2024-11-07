import LoginForm from "../../components/LoginForm/LoginForm";
import DocumentTitle from "../../components/DocumentTitle";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";

const LoginPage = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <div>
      <DocumentTitle>Ligon</DocumentTitle>
      {isLoading && <Loader />}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
