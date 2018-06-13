<template>
    <div class="page-index">
		<nav class="navbar  navbar-fixed-top  navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Brand</a>
				</div>

				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active"><a href="#">HOME </a></li>
						<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Product <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Product1</a></li>
							<li><a href="#">Product2</a></li>
							<li><a href="#">Product3</a></li>
							<li><a href="#">Product4</a></li>
						</ul>
						</li>
					</ul>
					<form class="navbar-form navbar-left">
						<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
						</div>
						<button type="submit" class="btn btn-default">Submit</button>
					</form>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container-fluid -->
		</nav>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.navbar-default {
  background-color: #545c64;
}
.navbar {
  margin-bottom: 0px !important;
}
</style>