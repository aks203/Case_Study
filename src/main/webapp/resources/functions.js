var app=app||{};

function showView(view){
        if (this.presentView){
            debugger;
            this.presentView.close();
        }
        debugger;
        this.presentView = view;
        this.presentView.render();
        // $("#mainContent").html(this.currentView.el);
}

$(document).ready(function () {
    Backbone.View.prototype.close = function(){
        this.$el.empty();
        this.unbind();
    };
    if(JSON.parse(sessionStorage.getItem("response"))==null) {
        new app.signupView({model: new app.User});
    }
    else {
        app.role=JSON.parse(sessionStorage.getItem("response")).user.role;
        debugger;
        showDashboard(JSON.parse(sessionStorage.getItem("response")));
    }
})

function showDashboard(response) {
    app.dashboardView= new app.DashboardView({
        model: new app.Dashboard({
            response: response
        })
    });
}

function getUserId() {
    var user_id=JSON.parse(sessionStorage.getItem("response")).user.id;
    if(user_id!=null)
        return user_id;
    else
        return null;
}

function logout() {
    alert("Logging you out.");
    app.dashboardView.destroy();
    sessionStorage.clear();
    // app.loginView=null;
    debugger;
    app.DashboardView.libraryView=null;
    new app.LoginView({model: new app.Auth()});
}



