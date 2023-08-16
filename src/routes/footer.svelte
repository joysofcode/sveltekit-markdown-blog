<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
	<div>
		<p><a href="mailto:ppcpanos.work@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/icons8-mail-64.png" alt="mail icon"></a></p>
		<p><a href="https://www.linkedin.com/in/ppcpanos/"target="_blank" rel="noopener noreferrer"><img src="/icons8-linkedin-80.png" alt="mail icon"></a></p>
		<p><a href="https://twitter.com/ppcpanos"target="_blank" rel="noopener noreferrer"><img src="/icons8-twitter-80.png" alt="mail icon"></a></p>
		<p><a href="https://www.facebook.com/PPCPanos/"target="_blank" rel="noopener noreferrer"><img src="/icons8-facebook-80.png" alt="mail icon"></a></p>
		<p><a href="https://www.instagram.com/ppcpanos/"target="_blank" rel="noopener noreferrer"><img src="/icons8-instagram-80.png" alt="mail icon"></a></p>
	</div>

	<div>
		<p>{config.title} &copy {new Date().getFullYear()}</p>
	</div>

	
</footer>


<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
		display: inline-block; /* Set paragraphs to be inline blocks */
        margin: 0 5px; /* Add horizontal margin between paragraphs */
		vertical-align: middle; /* Align the icons vertically */
	}

	img {
    width: 20px; /* Set the desired width for the icons */
    height: auto; /* Automatically adjust the height to maintain aspect ratio */
  }
</style>
  