<template>
  <div class="card article">
    <div class="card-content">
      <div class="media">
        <div class="media-center">
          <img
            :src="avatar"
            class="author-image"
            alt="Placeholder image"
          >
        </div>
        <div class="media-content has-text-centered">
          <p class="title article-title">Sapien eget mi proin sed 🔱</p>
          <p class="subtitle is-6 article-subtitle">
            <a href="#">@sr2ds</a> on Mar 20, 2019
          </p>
        </div>
      </div>
      <div class="content article-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.</p>
        <p>Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.</p>
        <h3
          class="has-text-centered"
        >Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cras tincidunt lobortis feugiat vivamus.</h3>
        <p>
          In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
          Arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleCard",
  data() {
    return {
      avatar: `https://api.adorable.io/avatars/204/${Math.random()}@adorable.io.png`
    }
  }
};
</script>
<style scoped>
.article-title {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
}
.article-subtitle {
  color: #909aa0;
  margin-bottom: 3rem;
}
.article-body {
  line-height: 1.4;
  margin: 0 6rem;
}
.author-image {
  position: absolute;
  top: -30px;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  border: 3px solid #ccc;
  border-radius: 50%;
}

.media-center {
  display: block;
  margin-bottom: 1rem;
}
.media-content {
  margin-top: 3rem;
}
</style>
