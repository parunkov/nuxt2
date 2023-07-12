<template>
    <div class="container">
      <div class="title">
        <h2>Авторизация</h2>
      </div>
      <form class="form">
        <label for="uname" class="form-label"><b>Логин</b></label>
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Логин"
          name="uname"
          required
        />
        <label for="psw" class="form-label"><b>Пароль</b></label>
        <input
          type="password"
          class="form-control mb-3"
          placeholder="Пароль"
          name="psw"
          required
        />
        <button class="btn btn-primary mb-3">Войти</button>
      </form>
    </div>
</template>
<style scoped>
  .form {
    width: 400px;
  }
</style>