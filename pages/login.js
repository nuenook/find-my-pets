import Layout from '../component/Layout'

const Login = () => (
    <Layout>
        <div  style={{margin: '15%'}}>
            <h2 className="header center orange-text">Sign In</h2>
            <form action="">
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="loginUsername" />
                        <label htmlFor="loginUsername">Username Or Email</label>
                    </div>
                    <div className="input-field col s12">
                    <input type="text" id="loginPassword" />
                    <label htmlFor="loginPassword">Password</label>
                    </div>
                    
                    <button className="btn waves-effect light-blue"> Login </button>
                </div>
            </form>
            
        </div>
    </Layout>
)

export default Login