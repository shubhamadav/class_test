function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toLocaleTimeString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Example usage:
const posts = [];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 2000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve(posts);
      } else {
        reject(new Error("No posts to delete."));
      }
    }, 1500);
  });
}

// Usage example:
createPost("First post")
  .then((newPosts) => {
    console.log("Posts created:", newPosts);
    return updateLastUserActivityTime();
  })
  .then((lastActivityTime) => {
    console.log("Last activity time:", lastActivityTime);
    return deleteLastPost();
  })
  .then((updatedPosts) => {
    console.log("Posts after deletion:", updatedPosts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

