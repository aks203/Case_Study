var app=app || {};

app.signupView = Backbone.View.extend({
    el: $("#container"),
    // template: _.template($('#userTemplate').html(), {interpolate: /\<\@\=(.+?)\@\>/gim}),
    templateReg: _.template($('#register-template').html(), {interpolate: /\<\@\=(.+?)\@\>/gim}),

    events: {
        'click #register': 'onRegFormSubmit',
        'click #showRegister': 'showRegisterForm',
        'click #showLogin': 'showLoginForm'
    },

    initialize: function () {
        console.log(this.model);
        this.render();
    },

    showLoginForm:function(e) {
        // this.undelegateEvents();
        // this.$el.empty();
        debugger;
        app.loginView=new app.LoginView({model: new app.Auth()})
    },

    showRegisterForm: function(e){
        // app.loginView.undelegateEvents();
        // app.loginView.empty();
        debugger;
      this.render();
    },

    onRegFormSubmit: function (e) {
        // e.preventDefault();
        this.model.set({
            name: $("#name").val(), email: $("#email").val(),
            password: $("#password").val(), phone: $("#phone").val(), language: $("#language").val()
        });
        var o=this;
        this.model.save({
            type: "POST",
            contentType: "application/json"
        },{success:function (model, response) {
                $("#regMsg").html(response.msg);
                console.log(response.msg);
            },
            error: function (model, response) {
                console.log('error! ' + response);
                $("#regMsg").html("Error creating user. Please try again..")
            }, wait: true});
    },

    render: function() {
        this.$el.html(this.templateReg(this.model.toJSON()));
        return this;
    }
});

$(document).ready(function () {
    if(JSON.parse(sessionStorage.getItem("response"))==null) {
        new app.signupView({model: new app.User});
    }
    else {
        console.log(JSON.parse(sessionStorage.getItem("response")));
        showDashboard(JSON.parse(sessionStorage.getItem("response")));
    }
})
