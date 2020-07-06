document.write(`
	<div class="tab-bottomsection-left">
		<p>Mauris pellentesque velit eu magna sollicitudin finibus.</p>
		<p>Mauris pellentesque velit eu magna sollicitudin finibus.</p>
	</div>

	<!-- Modal Links Section -->
	<div class="tab-bottomsection-right">
	   	<button class="modal_btn" id="first_btn" onclick="document.getElementById('first_modal').style.display='block'">AA</button>
	   	<button class="modal_btn" id="second_btn" onclick="document.getElementById('second_modal').style.display='block'">BB</button>
	</div>

	<!-- Modal Content -->
	<!-- First Modal -->
	<div class="modal" id="first_modal" >
		<div class="modal-content" >
			<div class="modal-header">
		   		<h2>Lorem ipsum</h2>
		   		<span onclick="document.getElementById('first_modal').style.display='none'" class="modal-close">×</span>
		   	</div>
			<div class="modal-body">	
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet erat convallis, porta elit eu, vehicula odio. Donec augue purus, aliquam non cursus in, condimentum at ex. Aliquam vitae vulputate nulla, in pretium ligula. Integer feugiat justo vel aliquet aliquet. Donec fringilla ultricies purus eu eleifend. Vestibulum eleifend elit vel pharetra gravida. Suspendisse et nulla dapibus ligula ornare facilisis vel vel nulla. Ut turpis sem, ultrices quis scelerisque feugiat, luctus eu risus. Suspendisse dapibus ipsum ut sodales accumsan. Proin quam est, sodales vitae lorem vel, tristique pretium ante. Aliquam eget gravida arcu, ut lobortis augue. Sed lobortis ipsum sed felis commodo aliquet. Donec et metus tellus. Nullam sit amet ante sit amet odio posuere congue at sit amet leo. Integer aliquam viverra nisl interdum commodo.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet erat convallis, porta elit eu, vehicula odio. Donec augue purus, aliquam non cursus in, condimentum at ex. Aliquam vitae vulputate nulla, in pretium ligula. Integer feugiat justo vel aliquet aliquet. Donec fringilla ultricies purus eu eleifend. Vestibulum eleifend elit vel pharetra gravida. Suspendisse et nulla dapibus ligula ornare facilisis vel vel nulla. Ut turpis sem, ultrices quis scelerisque feugiat, luctus eu risus. Suspendisse dapibus ipsum ut sodales accumsan. Proin quam est, sodales vitae lorem vel, tristique pretium ante. Aliquam eget gravida arcu, ut lobortis augue. Sed lobortis ipsum sed felis commodo aliquet. Donec et metus tellus. Nullam sit amet ante sit amet odio posuere congue at sit amet leo. Integer aliquam viverra nisl interdum commodo.</p>
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet erat convallis, porta elit eu, vehicula odio. Donec augue purus, aliquam non cursus in, condimentum at ex. Aliquam vitae vulputate nulla, in pretium ligula. Integer feugiat justo vel aliquet aliquet. Donec fringilla ultricies purus eu eleifend. Vestibulum eleifend elit vel pharetra gravida. Suspendisse et nulla dapibus ligula ornare facilisis vel vel nulla. Ut turpis sem, ultrices quis scelerisque feugiat, luctus eu risus. Suspendisse dapibus ipsum ut sodales accumsan. Proin quam est, sodales vitae lorem vel, tristique pretium ante. Aliquam eget gravida arcu, ut lobortis augue. Sed lobortis ipsum sed felis commodo aliquet. Donec et metus tellus. Nullam sit amet ante sit amet odio posuere congue at sit amet leo. Integer aliquam viverra nisl interdum commodo.</p>
			</div>
		</div>
	</div>
	
	<!-- Second Modal -->
	<div class="modal" id="second_modal" >
		<div class="modal-content">
			<div class="modal-header">
		   		<h2>Mauris pellentesque</h2>
		   		<span onclick="document.getElementById('second_modal').style.display='none'" class="modal-close">×</span>
		   	</div>
			<div class="modal-body">	
				<p>Mauris pellentesque velit eu magna sollicitudin finibus. Mauris ac turpis turpis. Aenean congue, sem in eleifend volutpat, mauris libero blandit velit, quis tincidunt massa neque vel lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem 	dui, pretium suscipit ipsum in, dignissim euismod quam. Aliquam vestibulum ut quam id sollicitudin. Donec hendrerit pulvinar dignissim. Aenean purus massa, pulvinar non metus non, placerat interdum velit.</p>    
    			<p>Mauris pellentesque velit eu magna sollicitudin finibus. Mauris ac turpis turpis. Aenean congue, sem in eleifend volutpat, mauris libero blandit velit, quis tincidunt massa neque vel lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem 	dui, pretium suscipit ipsum in, dignissim euismod quam. Aliquam vestibulum ut quam id sollicitudin. Donec hendrerit pulvinar dignissim. Aenean purus massa, pulvinar non metus non, placerat interdum velit.</p>    
    			<p>Mauris pellentesque velit eu magna sollicitudin finibus. Mauris ac turpis turpis. Aenean congue, sem in eleifend volutpat, mauris libero blandit velit, quis tincidunt massa neque vel lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem 	dui, pretium suscipit ipsum in, dignissim euismod quam. Aliquam vestibulum ut quam id sollicitudin. Donec hendrerit pulvinar dignissim. Aenean purus massa, pulvinar non metus non, placerat interdum velit.</p>    
    			<p>Mauris pellentesque velit eu magna sollicitudin finibus. Mauris ac turpis turpis. Aenean congue, sem in eleifend volutpat, mauris libero blandit velit, quis tincidunt massa neque vel lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem 	dui, pretium suscipit ipsum in, dignissim euismod quam. Aliquam vestibulum ut quam id sollicitudin. Donec hendrerit pulvinar dignissim. Aenean purus massa, pulvinar non metus non, placerat interdum velit.</p>    
			</div>
		</div>
	</div>
`);