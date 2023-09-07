<script>
    import { enhance } from '$app/forms';

    let generationLoading = false, hasGenerated = false;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>
<div class="navbar bg-base-100">Good morning, sunshine!</div>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
        {#if !hasGenerated}
            <div class="artboard artboard-demo square">
                {#if generationLoading}
                    <span class="loading loading-ring loading-lg"></span>
                {:else}
                    <p>Your image will appear here</p>
                {/if}
            </div>
        {:else}
            <img src="/generated-image.png" alt="AI response" width="520" height="520">
        {/if}
		<div>

			<h1 class="text-5xl font-bold">Let's generate a cool Good Morning Image</h1>
            <br>
            <form method="POST" use:enhance={() => {
                generationLoading = true;
                return async ({ update }) => {
                    generationLoading = false;
                    hasGenerated = true;
                    
                    update();
                };
            }}>
                <input type="text" placeholder="Insert the promp to generate the image" class="input input-bordered w-full max-w-xs" />
                <br>
                <br>
                <button class="btn btn-primary">Generate!</button>
            </form>
		</div>
	</div>
</div>

