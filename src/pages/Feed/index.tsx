import SideBar from "../../components/organisms/SideBar";

export default function Feed() {
  return (
    <div style={{height: '200vh', width:'50%'}}>
      <div style={{height: '100px', width:'100%', background:'#333', borderRadius: '5px', display: "flex", alignItems:'center', justifyContent: 'center'}}>
        <textarea style={{resize: 'none', width: '100%', height:'100%', padding: '10px', background:'none', border: 'none', outline: 'none', color:'#fff'}} placeholder="Está inspirado? Manda brasa..."/>
      </div>
    </div>
  )
}
