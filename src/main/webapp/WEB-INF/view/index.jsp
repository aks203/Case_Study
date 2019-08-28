<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="http://underscorejs.org/underscore-min.js"></script>
    <script src="http://backbonejs.org/backbone-min.js"></script>
    <script src="reg-form.jsp"></script>
</head>
<body>

<form method="post">
    <div><input name="name" id="name" type="text" placeholder="Name"/></div>
    <div><input name="email" id="email" type="text" placeholder="Your mail"/></div>
    <div><input name="password" id="password" type="password" placeholder="Password"/></div>
    <div><input name="phone" id="phone" type="text" placeholder="Phone"/></div>
    <div><input name="language" id="language" type="text" placeholder="Language"/></div>
    <input type="button" value="Go" id="register"></input>
</form>



<script type="text/template" id="userTemplate">

    <td><span class="name"><@ name @></span> </td>
    <td><span class="email"><@ email @></span> </td>
    <td><span class="password"><@ password @></span> </td>
    <td><span class="password"><@ phone @></span> </td>
    <td><span class="password"><@ language @></span> </td>
</script>
</body>
</html>