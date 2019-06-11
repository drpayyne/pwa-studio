import { connect } from '../../drivers';
import CreateAccount from './createAccount';

const mapStateToProps = ({ user }) => {
    const { createAccountError } = user;
    return {
        createAccountError
    };
};

export default connect(mapStateToProps)(CreateAccount);
