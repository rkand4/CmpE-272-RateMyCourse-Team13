function(doc) { var prefix = doc.description.match(/[A-Za-z0-9]+/g); if(prefix) for(var index in prefix) {emit(prefix[index],doc);}}