<script>
  import {
    initializeApp,
    getApps,
    getApp,
  } from "firebase/app";
  import {
    getFirestore,
    collection,
    onSnapshot,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { firebaseConfig } from "$lib/firebaseConfig";
  import { browser } from "$app/env";

  //only necessary with sveltekit (not with svelte)
  const firebaseApp =
    browser &&
    (getApps().length === 0
      ? initializeApp(firebaseConfig)
      : getApp());
  const db = browser && getFirestore();

  const colRef = browser && collection(db, "todos");

  let todos = [];
  const unsubscribe =
    browser &&
    onSnapshot(colRef, (querySnapshot) => {
      let fbTodos = [];
      querySnapshot.forEach((doc) => {
        let todo = { ...doc.data(), id: doc.id };
        fbTodos = [todo, ...fbTodos];
      });
      //console.table(fbTodos);
      todos = fbTodos;
    });

  console.log({ firebaseApp, db });

  let task = "";
  let error = "";

  const addTodo = async () => {
    if (task !== "") {
      //todos = [...todos, todo];
      const docRef = await addDoc(collection(db, "todos"), {
        task: task,
        isComplete: false,
        createdAt: new Date(),
      });
      error = "";
    } else {
      error = "Task is empty";
    }
    task = "";
  };

  const markTodoAsComplete = async (item) => {
    await updateDoc(doc(db, "todos", item.id), {
      isComplete: !item.isComplete,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const keyIsPressed = (event) => {
    //console.log(event);
    if (event.key === "Enter") {
      addTodo();
    }
  };

  $: console.table(todos);
</script>

<main>
  <div class="container">
    <div class="firstline">
      <input
        class="todoinput"
        type="text"
        bind:value={task}
      />
      <button class="addbutton" on:click={addTodo}
        >Add</button
      >
    </div>
    {#each todos as item}
      <li class="litodo">
        <span class:complete={item.isComplete}>
          {item.task}
        </span>
        <span>
          <button
            class="todobutton finishtodo"
            on:click={() => markTodoAsComplete(item)}
            >✔️</button
          >
          <button
            class="todobutton deletetodo"
            on:click={() => deleteTodo(item.id)}>❌</button
          >
        </span>
      </li>
    {:else}
      <p class="pnone">No Todos</p>
    {/each}
    <p class="perror">{error}</p>
  </div>
</main>
<svelte:window on:keydown={keyIsPressed} />

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

  $errorred: rgb(209, 0, 0);

  .container {
    width: auto;
    min-width: 20rem;
    max-width: 24rem;
    margin: 2rem auto auto auto;
    font-family: "Share Tech Mono", monospace;
  }

  .todobutton {
    font-family: "Share Tech Mono", monospace;
  }

  .addbutton {
    font-family: "Share Tech Mono", monospace;
  }

  .todoinput {
    font-family: "Share Tech Mono", monospace;
  }

  .firstline {
    margin: 0 auto;
  }

  .complete {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .litodo {
    padding: 1em 0em 0em 0.5em;
    display: flex;
    justify-content: space-between;
  }

  .pnone {
    padding: 0em 0em 0em 0.5em;
  }

  .perror {
    padding: 0em 0em 0em 0.5em;
    color: $errorred;
  }

  @media (max-width: 500px) {
    .container {
      width: 80%;
    }
  }
</style>
