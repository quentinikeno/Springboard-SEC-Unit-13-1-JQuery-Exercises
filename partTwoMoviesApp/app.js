$(document).ready(() => {
	$("#rating").on("change", function () {
		$("#ratingDisplaySpan").text($(this).val());
	});

	//When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
	$("#submit").on("click", function (event) {
		event.preventDefault();
		let $title = $("input").eq(0);
		let $rating = $("input").eq(1);

		if ($title.val().trim().length < 2) {
			return alert("Movie title must be at least 2 characters long.");
		}

		let $moviesDiv = $("<div>")
			.addClass("movie")
			.append(
				$("<span>", { text: $title.val().trim() }).addClass("title")
			)
			.append($("<span>", { text: " - " }))
			.append($("<span >", { text: $rating.val() }).addClass("rating"))
			.append($("<button>", { text: "Delete movie" }));

		$("#moviesDiv").append($moviesDiv);
		$title.val("");
		$rating.val("5");
		$("#ratingDisplaySpan").text("5");
	});

	$("#moviesDiv").on("click", "button", function () {
		$(this)
			.parent()
			.fadeOut(function () {
				$(this).parent().remove();
			});
	});

	function sortMovie(sortBy) {
		//SortMovie function adpated from https://www.onemoretake.com/2009/02/25/sorting-elements-with-jquery/
		let $moviesDiv = $("#moviesDiv");
		let allMoviesArray = $moviesDiv.children().get();
		allMoviesArray.sort((a, b) => {
			let compA = $(a).find(`.${sortBy.data.field}`).text().toLowerCase();
			let compB = $(b).find(`.${sortBy.data.field}`).text().toLowerCase();
			return compA < compB ? -1 : compA > compB ? 1 : 0;
		});
		$moviesDiv.children().remove();
		$.each(allMoviesArray, (index, movie) => {
			$moviesDiv.append(movie);
		});
	}

	$("#sortTitle").on("click", { field: "title" }, sortMovie);
	$("#sortRating").on("click", { field: "rating" }, sortMovie);
});
