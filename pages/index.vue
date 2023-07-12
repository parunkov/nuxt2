<template>
    <div class="container">
      <div class="title mt-3">
        <h2>Авторизация</h2>
      </div>
      <form class="form">
        <label for="login" class="form-label"><b>Логин</b></label>
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Логин"
          name="login"
          required
        />
        <label for="password" class="form-label"><b>Пароль</b></label>
        <input
          type="password"
          class="form-control mb-3"
          placeholder="Пароль"
          name="password"
          required
        />
        <button type="submit" class="btn btn-primary mb-3">Войти</button>
      </form>
    </div>
</template>
<style scoped>
  .form {
    width: 300px;
  }
</style>