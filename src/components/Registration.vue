<!-- Component for StartHomepage including Options to Register and Login --> 
<template>
  <div class="registration">
    <!-- Navigation Bar --> 
    <b-navbar toggleable="false" type="dark" variant="transparent">
    <b-navbar-brand href = "#" style="text-decoration: none; color:black;">RoboDoc</b-navbar-brand>
    <!-- Modal for Registration --> 
    <div class="Modal-Register">
      <b-modal id="modal-1" ref="modal-1" title="Register" hide-footer="true">
        <p v-if="msg">{{ msg }}</p>
        <b-form-group id="Hospital Employee" label-for="input-employee">
            <b-form-input id="input-employee"
            v-model=employee.name 
            placeholder="Name"
            />
        </b-form-group>

        <b-form-group
          id="email"
          label-for="input-email">
          <b-form-input
          id="input-email"
            type= "email"
            placeholder="Email"
            v-model=employee.email />
        </b-form-group>

        <b-form-group
          id="username"
          label-for="input-username"
        >
          <b-form-input
            id="input-username"
            type="text"
            placeholder="Username"
            v-model=employee.username />
        </b-form-group>

        <b-form-group
          id="password"
          label-for="input-password" 
          >
          <b-form-input
            id="input-password"
            type="password"
            placeholder="Password"
            v-model=employee.password 
            @keydown.enter="signUp"
            />
        </b-form-group>
        
        <span style="color:tomato" v-if="registrationNotSuccessfull"> {{ messageRegistration }}</span>

        <div class="modal-footer">
          <button type="button"  @click="signUp" class="btn btn-success btn-lg btn-block" data-dismiss="modal">Register</button>
          <p class="center">Please Log In after your Registration</p>
        </div>
    </b-modal>
  </div>
  <!-- Modal for Login --> 
  <div class="Modal-login">
    <b-button class= "registerButton"  v-b-modal.modal-1 size="sm" variant="outline-dark" style="text-decoration: none; color:black;">Register</b-button>
    <b-button class= "loginButton" v-b-modal.modal-2 size="sm" variant="outline-dark" style="text-decoration: none; color:black;">Login</b-button>
    <b-button variant="outline-dark" size="sm"> <router-link style="text-decoration: none; color:black;" to="/singlePatient"> Get Single Patient Data</router-link></b-button>
   
    <b-modal id="modal-2" title="Login" hide-footer="true">
      
     <b-form-group
        id="user"      
        label-for="user"
        invalid-feedback="Wrong Input"
        valid-feedback="Thank you">

        <b-form-input id= "user"
          placeholder="Username"
          v-model=user.username >
        </b-form-input>

      </b-form-group>

      <b-form-group
        id="password"
        label-for="password"
        invalid-feedback="Wrong password"
        valid-feedback="Thank you">

        <b-form-input id="password"
          type="password"
          placeholder="Password"
          v-model=user.password
          @keydown.enter="login">
        </b-form-input>        
      </b-form-group>

      <span style="color:tomato">{{ message }}</span>

     <div class="modal-footer">
        <button type="button"  @click="login" class="btn btn-primary btn-lg btn-block" data-dismiss="modal">Login</button>
      </div>
    </b-modal>
    </div>
  </b-navbar>

     <b-carousel
      id="carousel"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="488"
      style="text-shadow: 1px 1px 2px #333;"   
    >
        <!-- Slides with custom text -->
      <b-carousel-slide 
        img-src="https://picsum.photos/id/733/1024/488">
        <h1>RoboDoc</h1> 
      </b-carousel-slide>
        <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://picsum.photos/id/668/1024/488"
      ><h2>The smart way to manage your patients</h2>
      </b-carousel-slide>
    </b-carousel>

    <p>Discover RoboDoc
    <br>
    The latest innovation in the field of hospital management
    </p>

    <b-container class="bv-container">
      <b-row>
        <b-col>
          <b-card 
            class="card1"
            id = "register-card"
            title="Register"
          >
            <b-card-text>
              If you do not have an account set up yet you will need to register first to access RoboDoc
             </b-card-text>
            <b-button v-b-modal.modal-1 variant="outline-dark">Register</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card  class="card2"
              id = "register2-card"
              title="Log In ">  
            <b-card-text>
              Log in to account to fill the form to assess patient
            </b-card-text>
    <br>

              <b-button v-b-modal.modal-2 variant="outline-dark">Log in</b-button>
            </b-card>
        </b-col>
      </b-row>
        <b-col>
          <b-card  
            class="card3"
            id = "register3-card"
            title="Get Single Patient Data">
              <b-card-text>
                You can also use RoboDoc as a patient. <br>
                Simply ask your attending doctor for your RoboDoc ID 
                and view your personal data here.
              </b-card-text>
          <b-button variant="outline-dark"> <router-link style="text-decoration: none; color:black;" to="/singlePatient"> Get Single Patient Data</router-link></b-button>
          </b-card>
        </b-col>
    </b-container>

     <v-footer>
      <p style="color:dimgrey"> 2021 - RoboDoc </p>    
      </v-footer>
  </div>
</template>


<script>
import AuthService from '@/services/AuthService.js'
import UserService from '../services/UserService'


export default {
    name: 'Registration', 
    props:{}, 
    components:{
        
    },
    created(){
        document.title = "RoboDoc"
    },
    data(){
      return {
      //Data neccessary for Login and Registration (Username, Password ...)
        messageRegistration:"",
        msg:"",
        message:"",
        employee:{
          name:"", 
          email:"", 
          username:"",
          password:""
        },
        user: {
          username: '',
          password: '',
        },
      }
    },
  
  methods: {
    registrationSuccessfull(){
      if (this.messageRegistration=="Successfully registered!")return true; 
      else return false; 
    },

    registrationNotSuccessfull(){
      if(this.messageRegistration=="Registration failed. Please try again!")return true; 
      else return false;
    },
     
    registration(event){
      event.preventDefault();  
      this.$emit("register-Employee", this.employee);
    },
    //Function to register a User 
    async signUp (){
      try {
        const credentials = {
            name:this.employee.username, 
            email: this.employee.email,
            password: this.employee.password 
          };
        const response = await AuthService.signUp(credentials);
          console.log(response)
          this.$refs['modal-1'].hide()
        }catch (error){
          this.messageRegistration="Registration failed. Please try again!";  
        }
      },
    //Function to Login a User making use of the Store 
    //JWT Handling 
    async login (){
        try {
          const credentials = {
            name:this.user.username, 
            password: this.user.password
          }; 
          const response = await AuthService.login(credentials); 

          console.log(response);
          console.log("fafafaf")
          

          this.msg = response.msg; 

          const token = response.token; 
          const user = this.user;
          
          this.$store.dispatch('login',{token,user}); 
          
          const responseTwo = await UserService.getUserByUsername(this.user.username); 
    
          if(responseTwo.isAdmin){
            this.$router.push('/adminHome'); 
          }
          else{
            this.$router.push('/homepage'); 
          }

        }catch (error){
          if(error.response.status==404){
            this.message="This User is not registered!"
            }
          if(error.response.status==401)
            this.message = "The Password is invalid!"
          if(error.response.status==500){
            this.message="Server Error. Please try again!"
            }
        }
      },
    }
  }
</script>
<style scoped>
.center{
      margin-left:20%;
      margin-right:20%;
}
#register-card{
  margin-top: 30%; 
}
#register2-card{
  margin-top:30%;
}
h1 {
  color: black;
  margin-bottom: 25%;
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
}
@media (min-width: 500px) {
  h1, h2 {
    font-size: 100%;
  }
}
@media (min-width: 768px) {
  h1, h2 {
    font-size: 200%;
  }
}
@media (min-width: 992px) {
  h1, h2 {
    font-size: 300%;
  }
}
          
h2 {
  color: black;
  margin-bottom: 25%;
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
}   
  
.carousel {
  position:relative;      
}

.carousel-inner {  
  display: flex;
  align-items: center;
}
.navbar {
    position:absolute;
    top:0px;
    z-index:10;
    background:#fff;
    width:100%;
}
.navbar-inner {
    background:transparent;
}
.registerButton {
  margin-right: 5px;
  position: left;
}
.loginButton {
  margin-right: 5px;
  position: left;
}
.card {
  margin-bottom: 50px;
}
p{
  margin-top: 50px;
}
</style>