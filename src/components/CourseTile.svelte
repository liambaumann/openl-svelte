<script>
    export let course;
</script>

<main>
    <div class="course">
        <h3>{course.name}</h3>
        <p>{course.code}</p>
        <p>Users: {course.users}</p>
    </div>
</main>

<style>
    .course {
        border: 0.2em solid grey;
        border-radius: 1em;
        width: 7em;
        height: 10em;
        margin: 1em;
        padding: 0.6em;
        text-align: center;
    }
</style>
