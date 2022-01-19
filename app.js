$(document).ready(() => {
	//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
	console.log("Let’s get ready to party with jQuery!");

	//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
	$("article img").addClass("image-center");

	//Remove the last paragraph in the article.
	$("article p:last-of-type").remove();

	//Set the font size of the title to be a random pixel size from 0 to 100.
	$("#title").css("font-size", `${Math.floor(Math.random() * 100)}px`);

	//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
	$("aside")
		.empty()
		.append(
			$("<p>", {
				text: "On behalf of all paragraphs, we apologize for the list.",
			})
		);

	//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
	$("input.form-control").on("change", function () {
		let red = $("input.form-control").eq(0).val();
		let blue = $("input.form-control").eq(1).val();
		let green = $("input.form-control").eq(2).val();

		$("body").css("background-color", `rgb(${red}, ${blue}, ${green})`);
	});

	//Add an event listener so that when you click on the image, it is removed from the DOM.
	$("img").on("click", function () {
		$(this).fadeOut(function () {
			$(this).remove();
		});
	});
});
